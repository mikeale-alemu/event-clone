import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between gap-4 flex-col sm:flex-row">
        <Link href="/">
        <Image
            src="/assets/images/logo.svg"
            alt="Logo"
            width={47}
            height={10}
          />
        </Link>
        <p>2024 Evently. All Right Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer