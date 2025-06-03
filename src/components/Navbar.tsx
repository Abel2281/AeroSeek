import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <div className="fixed top-10 left-1/2 transform -translate-x-1/2 w-[95%] z-50 bg-neutral-300 text-black rounded-4xl px-6 py-3 shadow-md flex items-center justify-between">
      <h1 className="text-2xl font-bold tracking-wide text-black">AeroCast</h1>

      <div className="flex items-center gap-2">
        <Input
          type="text"
          placeholder="Search city..."
          className="w-48 md:w-64 bg-white text-black rounded-3xl shadow-blue-100"
        />
        <Button variant="default" className="rounded-2xl shadow-neutral-800">Search</Button>
      </div>
    </div>
  );
};

export default Navbar
