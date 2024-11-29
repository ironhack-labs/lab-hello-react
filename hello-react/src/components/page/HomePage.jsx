import Introduction from "../Introduction";
import Navbar from "../ui/Navbar";

function HomePage({ className=""}) {
    return (
        <div className={`bg-dark ${className}`}>
            <Navbar />

            <Introduction />
        </div>
    );
}

export default HomePage