import Image from "next/image"

export default function MainHeroImage() {
    return (
        <div className="fixed inset-0 -z-10 select-none">
                <Image
                  alt="Hero Image"
                  src="/images/hero-bg.webp"
                  fill
                  quality={100}
                  priority
                  sizes="100vw"
                  className="invert-100 dark:invert-0 object-cover transition duration-500 ease-in-out"
                />
              </div>
    )
}