"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import GradientButton from "../GradientButton"
import { ArrowRight } from "lucide-react";

export default function MessageScreen({ onNext }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="px-4 md:px-6 py-10 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow mb-6 leading-tight"
            >
                A Special Message
            </motion.h2>

            <div className="mx-auto relative w-full max-w-3xl flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className=" h-auto max-w-xl bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50 rounded-2xl shadow-lg p-4 md:p-6 text-center"
                >
                    <p className="text-[#301733] text-base md:text-lg leading-relaxed overflow-y-auto max-h-[400px] pr-2">
                        Happy Birthday, Cutiepie! Hey Aashi,
                        I wanted to make your birthday special, so I’m writing this for you.
                        Socha nahi tha na ki apan itne achhe dost ban jaayenge? Apni friendship unexpected thi, but honestly bahut special hai.
                        In these 4 years, I’ve learned that real friendship loud nahi hoti, bas consistent hoti hai—and tu hamesha wahi rahi hai, har situation mein mere saath.
                        Tu genuinely bahut achhi hai—cute si, caring, aur teri smile toh best hai, jo kisi ka bhi mood achha kar de. Tu hamesha meri help karti hai and listens to me, and that makes me feel really important.
                        Thank you for being the same kind and real Aashi I met years ago.
                        I’m really grateful to have you in my life.
                        Happy Birthday, Aashi 🎂💛
                        Stay happy, stay healthy, and keep smiling always ✨
                    </p>
                </motion.div>
            </div>
        </div>
    )
}
