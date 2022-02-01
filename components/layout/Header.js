import Link from "next/link";
import Router from "next/router";

function Header() {
  return <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
            <img
            className="w-16 object-contain cursor-pointer"
            src="https://ci3.googleusercontent.com/proxy/F06TOKSCm4yXWYq63i1PAHZSCakxayQGkoK3wpEtYmcEnzn4fDTJvR-5ej-z-g8P-ZCAOIXF3ztEPA=s0-d-e1-ft#http://showdownart.in/logo_showdown.png"/>
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
            <h3>Home</h3>
            <h3>About</h3>
            <h3 className="text-white bg-green-400 px-4 py-1 rounded-full cursor-pointer" onClick={() => Router.push("/records")}>All Records</h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-green-600">
          <h3>Sign In</h3>
          <h3 className="border px-4 py-1 rounded-full border-green-600">Get Started</h3>
      </div>
  </header>;
}

export default Header;
