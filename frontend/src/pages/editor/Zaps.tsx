import { ReactFlow, Background, Handle, Position } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

const CustomNode = ({ data }) => (
    <div className="border border-dashed rounded-lg bg-white p-7 shadow-md w-80 flex flex-col items-start relative">
        <div className="absolute -top-2 left-4 bg-white px-2 text-xs text-gray-600 font-semibold">
            {data.type}
        </div>
        <p className="text-sm text-gray-900 font-semibold mb-1">{data.title}</p>
        <p className="text-xs text-gray-500">{data.description}</p>
        <Handle type="source" position={Position.Bottom} className="w-2 h-2 bg-gray-500" />
        <Handle type="target" position={Position.Top} className="w-2 h-2 bg-gray-500" />
    </div>
);

export default function ZapsEditor() {
    const initialNodes = [
        {
            id: "1",
            position: { x: 0, y: 0 },
            data: { title: "1. Select the event that starts your Zap", description: "", type: "Trigger" },
            type: "custom",
        },
        {
            id: "2",
            position: { x: 0, y: 150 },
            data: { title: "2. Select the event for your Zap to run", description: "", type: "Action" },
            type: "custom",
        },
    ];
    const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

    return (
        <div className="w-screen h-screen p-4 flex justify-center items-center">
            <ReactFlow nodes={initialNodes} edges={initialEdges} nodeTypes={{ custom: CustomNode }}>
                <Background color="#ccc" variant={"dots"} />
            </ReactFlow>
        </div>
    );
}
