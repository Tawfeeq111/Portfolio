import Link from "next/link"

function Dropdown() {
    return (
        <div className="block md:hidden fixed w-full bg-[#121212] bg-opacity-90 justify-between py-3">
            <ul className="flex flex-col gap-4 w-full">
                <li className="text-xl text-center text-[#ADB7BF] "><Link href={"#"}>Home</Link></li>
                <li className="text-xl text-center text-[#ADB7BF]"><Link href={"#"}>About</Link></li>
                <li className="text-xl text-center text-[#ADB7BF]"><Link href={"#"}>Projects</Link></li>
                <li className="text-xl text-center text-[#ADB7BF]"><Link href={"#"}>Contact</Link></li>
            </ul>
        </div>
    )
}

export default Dropdown
