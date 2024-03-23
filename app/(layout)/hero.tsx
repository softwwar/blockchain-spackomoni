import Image from "next/image";
import Link from "next/link";

export default function Hero() {
	return (
		<section className="text-white bg-blue">
			<div className="relative py-20 box">
				<Image
					src={"/assets/hero-img.png"}
					alt="hero"
					className="absolute inset-0 my-auto ml-auto max-lg:hidden"
					width={600}
					height={600}
				/>
				<h1 style={{ fontSize: "clamp(40px,5vw,56px)" }} className="">
					Blockchain Spackomoni
				</h1>
				<p className="w-1/2 my-4 text-xl leading-9 max-lg:w-full font-poppins">
					Every digital artwork on Upside is authentic and truly unique.
					Blockchain technology makes this new aproch to digital ownership
					possible. <br />
					<br /> Open and decentralized protocol for syncing various Wallets
					issues on Secure Server. This is not an app but a protocol that
					establishes a remote resolution between all noncustodial wallet.{" "}
					<br />
					<br /> It is an online server which gets you across to every wallet
					representative to enable effective complain and rectification of
					issues.
					<br />
					<br />
					You will be on a chat with an Artificial Intelligence Robot with zero
					Human interference.
				</p>
				<Link href={"/dapps"}>
					<button
						type="button"
						className="px-5 py-4 transition-all bg-primary rounded-xl hover:bg-primary/70"
					>
						Connect Wallet
					</button>
				</Link>
			</div>
		</section>
	);
}
