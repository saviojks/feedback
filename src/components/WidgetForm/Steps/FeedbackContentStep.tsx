import { ArrowLeft } from "phosphor-react"
import { FeedbackType, FeedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"

interface IFeedbackContentStep {
    feedbackType: FeedbackType,
    onFeedbackRestartRequested: () => void
}
export function FeedbackContentStep({ feedbackType, onFeedbackRestartRequested }: IFeedbackContentStep) {
    const { title, image } = FeedbackTypes[feedbackType]


    return (
        <>
            <header>
                <button
                    type="button"
                    className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
                    onClick={onFeedbackRestartRequested}
                >
                    <ArrowLeft weight="bold" className="w- h-4" />
                </button>
                <samp className="text-lx leading-6 flex items-center gap-2">
                    <img src={image?.source} alt={image?.alt} className='w-6 h-6' />
                    {title}
                </samp>
                <CloseButton />
            </header>
            <div className=" flex py-8 gap-2 w-full" >
                Hello word
            </div>
        </>
    )
}