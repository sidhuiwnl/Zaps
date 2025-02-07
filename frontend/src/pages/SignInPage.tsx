import SigninForm from "@/components/Signin.tsx";

export default function SignInPage(){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-primary/20 via-background to-secondary/20 p-4">
            <div className="w-full max-w-md">
                <div className="mb-8 text-center">
                    <div className="inline-block w-20 h-20 bg-primary rounded-full mb-4"></div>
                    <h1 className="text-3xl font-bold">Welcome back</h1>
                    <p className="text-muted-foreground mt-2">Sign in to your account</p>
                </div>
                <SigninForm />
            </div>
        </div>
    )
}