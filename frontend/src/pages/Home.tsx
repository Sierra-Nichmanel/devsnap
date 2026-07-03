import Button from "@/components/ui/Button";
import Navbar from "@/components/ui/Navbar";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
        <div>
            <Navbar></Navbar>
        </div>
          
        <div className="flex flex-col items-center justify-center px-6 pt-32 text-center">
            <h1 className="text-5xl font-bold">Build & Test APIs Faster</h1>

            <p className="mt-4 text-slate-600">
          DevSnap is a modern API workspace for developers
            </p>

            <Button className=" flex flex-row mt-6 px-6 py-3 text-xl font-light">Get Started <ArrowRight className="ml-4"/></Button>
        </div>
    </div>
  );
}
