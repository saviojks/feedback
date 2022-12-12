import { CloseButton } from "./CloseButton";
import bugImage from '../assets/bug.svg'
import ideaImage from '../assets/idea.svg'
import thoughtImage from '../assets/thought.svg'
import { useState } from "react";


const FeedbackTypes = {
    BUG: {
        title: 'Problemas',
        image: {
            source: bugImage,
            alt: 'Imagem de um inseto!'
        }
    },
    IDEA: {
        title: "Ideia",
        image: {
            source: ideaImage,
            alt: 'Imagem de um lampada!'
        }
    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImage,
            alt: 'Imagem de um balão de pensamento!'
        }
    }
}

type FeedbackType = keyof typeof FeedbackTypes

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

    return (
        <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto' >
            <header>
                <samp className="text-lx leading-6">
                    Deixe seu feedback!
                </samp>
                <CloseButton />
            </header>
            {!feedbackType ? (
                <div className=" flex py-8 gap-2 w-full" >
                    {Object.entries(FeedbackTypes).map(([key, value]) => {
                        return (
                            <button
                                key={key}
                                className="bg-zinc-800 rounded-lg py-5 w-24 flex flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                                type="button"
                                onClick={() => setFeedbackType(key as FeedbackType)}
                            >
                                <img src={value?.image?.source} />
                                <samp>
                                    {value?.title}
                                </samp>
                            </button>
                        )
                    })}
                </div>
            ) : 'Hello word'}
            <footer>
                Feito por <a className="underline underline-offset-2" href="http://www.saviojks.com.br" target="_blank" rel="noopener noreferrer">Sávio jks</a>
            </footer>
        </div>
    )
}