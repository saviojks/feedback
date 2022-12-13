import { CloseButton } from "./CloseButton";
import bugImage from '../../assets/bug.svg'
import ideaImage from '../../assets/idea.svg'
import thoughtImage from '../../assets/thought.svg'
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypesStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";


export const FeedbackTypes = {
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

export type FeedbackType = keyof typeof FeedbackTypes

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSend, setFeedbackSend] = useState(false)

    function handleRestartFeedback() {
        setFeedbackType(null)
        setFeedbackSend(false)
    }

    return (
        <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto' >
            {feedbackSend ? (
                <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
            )
                : (
                    <>
                        {!feedbackType ? (
                            <FeedbackTypeStep oneFeedbackTypeChanged={setFeedbackType} />
                        ) : (
                            <FeedbackContentStep
                                onFeedbackSend={setFeedbackSend}
                                feedbackType={feedbackType}
                                onFeedbackRestartRequested={handleRestartFeedback}
                            />
                        )}
                    </>
                )
            }
            <footer className="text-xs text-neutral-400" >
                Feito com amor por <a className="underline underline-offset-2" href="http://www.saviojks.com.br" target="_blank" rel="noopener noreferrer">Sávio jks</a>
            </footer>
        </div>
    )
}