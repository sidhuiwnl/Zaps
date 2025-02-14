import { ReactFlow, Background, Handle, Position, useNodesState, useEdgesState, ReactFlowProvider, NodeProps } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useCallback } from "react";
import { nanoid } from "nanoid";
import { Trash2 } from "lucide-react";
import { AppSelection } from "@/components/AppSelection.tsx";


const CustomNode = ({
                                                                                                                                 id,
                                                                                                                                 data,
                                                                                                                                 onAddNode,
                                                                                                                                 onDeleteNode,
                                                                                                                             } : {
    id: string;
    data: any;
    onAddNode: (node: any) => void;
    onDeleteNode: (node: any) => void;
}) => {


    return (
        <div className="border border-gray-600 rounded-lg bg-neutral-800 p-4 shadow-md w-64 flex flex-col items-center relative">

            <div className="absolute -top-2 left-3 bg-neutral-800 px-2 text-xs text-gray-400 font-semibold">{data.type}</div>
            <p className="text-sm text-gray-300 font-semibold">{data.title}</p>
            <p className="text-xs text-gray-500">{data.description}</p>
            <AppSelection/>
            <div className="absolute -right-5 top-1/2 transform -translate-y-1/2 flex flex-col gap-1">
                <button
                    className="p-1 border border-gray-500 rounded-md text-gray-100 bg-gray-700 hover:bg-gray-600"
                    onClick={() => onAddNode(id)}
                >
                    +
                </button>
                <button
                    className="p-1 border border-red-500 rounded-md text-white bg-red-700 hover:bg-red-600"
                    onClick={() => onDeleteNode(id)}
                >
                    <Trash2 size={14} />
                </button>
            </div>


            { data.type === "Action" ? <Handle type="target" position={Position.Top} className="w-2 h-2 bg-gray-500" /> : null }
            <Handle type="source" position={Position.Bottom} className="w-2 h-2 bg-gray-500" />
        </div>
    );
};

const initialNodes = [
    {
        id: "1",
        position: { x: 500, y: 300 },
        data: {
            title: "1. Select the event that starts your Zap",
            description: "",
            type: "Trigger",
            color: "#FF007F",
        },
        type: "custom",
    },
];

export default function ZapsEditor() {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);

    // Add new node
    const addNode = useCallback(
        (parentId: string) => {
            const newId = nanoid();
            const parentNode = nodes.find((node) => node.id === parentId);
            if (!parentNode) return;

            const newNode = {
                id: newId,
                position: { x: parentNode.position.x, y: parentNode.position.y + 120 },
                data: {
                    title: `Step ${nodes.length + 1} Select the event for your Zap to run`,
                    description: "",
                    type: "Action",
                    color: "#FF007F",
                },
                type: "custom",
            };

            const newEdge = {
                id: `e${parentId}-${newId}`,
                source: parentId,
                target: newId,
                animated: true,
            };

            setNodes((nds) => [...nds, newNode]);
            setEdges((eds) => [...eds, newEdge]);
        },
        [nodes, setNodes, setEdges]
    );


    const deleteNode = useCallback(
        (nodeId: string) => {
            setNodes((nds) => nds.filter((node) => node.id !== nodeId));
            setEdges((eds) => eds.filter((edge) => edge.source !== nodeId && edge.target !== nodeId));
        },
        [setNodes, setEdges]
    );

    return (
        <div className="w-screen h-screen p-4 mx-auto bg-neutral-800">
            <ReactFlowProvider>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    nodeTypes={{
                        custom: (props) => <CustomNode {...props} onAddNode={addNode} onDeleteNode={deleteNode} />,
                    }}
                >
                    <Background className="bg-neutral-600" variant={"dots"} />
                </ReactFlow>
            </ReactFlowProvider>
        </div>
    );
}
