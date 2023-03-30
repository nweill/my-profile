import Link from "next/link"
import Image from "next/image"
import { MY_NAME } from "@/app/globals"

export default function Logo() {
    return (
        <Link aria-label={MY_NAME} href="/">
            <Image src="/images/N.png" alt="Logo" width={100} height={100} />
        </Link>
    )
}
