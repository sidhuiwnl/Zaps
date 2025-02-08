
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Icons } from "@/components/ui/icons"
import {NavLink} from "react-router";
import axios from "axios"
import {useNavigate} from "react-router";

export default function SignupForm() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = async (data: any) => {

        setIsLoading(true);

        const response = await axios.post(`${import.meta.env.VITE_PRIMARY_BACKEND_URL}/api/v1/user/signup`,data)
        if(response.status === 200) {
            setIsLoading(false)
           navigate("/login")
            console.log(response.data.message)
        }else{
            setIsLoading(false)
            throw Error(response.statusText)
        }

    }

    return (
        <Card className="shadow-lg">
            <CardContent className="pt-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Username</Label>
                        <div className="relative">
                            <Icons.mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

                            <Input
                                id="username"
                            type="email"
                                placeholder="you@example.com"
                                className="pl-10"
                                {...register("username", { required: "Email is required" })}
                            />
                        </div>
                        {errors.name && <p className="text-destructive text-sm">{errors.name.message as string}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="username">Name</Label>
                        <div className="relative">
                            <Icons.user className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="name"
                                type="text"
                                placeholder="John Doe"
                                className="pl-10"
                                {...register("name", { required: "Name is required" })}
                            />
                        </div>
                        {errors.email && <p className="text-destructive text-sm">{errors.email.message as string}</p>}
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                            <Icons.lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                className="pl-10"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 8, message: "Password must be at least 8 characters" },
                                })}
                            />
                        </div>
                        {errors.password && <p className="text-destructive text-sm">{errors.password.message as string}</p>}
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? (
                            <>
                                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                Creating account
                            </>
                        ) : (
                            "Sign Up"
                        )}
                    </Button>
                </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                    </div>
                </div>
                <div className="flex space-x-2">
                    <Button variant="outline" className="w-full">
                        <Icons.beer className="mr-2 h-4 w-4" />
                        GitHub
                    </Button>
                    <Button variant="outline" className="w-full">
                        <Icons.google className="mr-2 h-4 w-4" />
                        Google
                    </Button>
                </div>
                <p className="text-center text-sm text-muted-foreground">
                    Already have an account?{" "}
                    <NavLink to="/login" className="font-medium text-primary hover:underline">
                        Sign in
                    </NavLink>
                </p>
            </CardFooter>
        </Card>
    )
}

