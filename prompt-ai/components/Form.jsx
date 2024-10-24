import Link from 'next/link';

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
    return (
        <section className="w-full max-w-full flex-start flex-col" s>
            <h1 className="head_text text-left">
                <span className="blue_gradient">{type} Post</span>
            </h1>
            <p className="desc text-left max-w-md">
                {type} and share amazing prompts with the world, and let your
                imagination run wild with AI-powered platform.
            </p>
            <form
                onSubmit={handleSubmit}
                className="mt-10 w-full max-w-2xl flex flex-col gap-7 rounded-xl border border-gray-200 bg-white/20 shadow-inset -top-10 -left-50 h-94 bg-gray-200 bg-opacity-20 backdrop-blur p-5"
            >
                <label>
                    <span className="font-satoshi font-semibold text-base text-gray-700">
                        Your AI Prompt
                    </span>
                    <textarea
                        value={post.prompt}
                        onChange={(e) =>
                            setPost({ ...post, prompt: e.target.value })
                        }
                        className="form_textarea"
                        placeholder="Write your prompt here..."
                        required
                    />
                </label>
                <label>
                    <span className="font-satoshi font-semibold text-base text-gray-700">
                        Tag {` `}
                        <span className="font-normal">
                            (#product, #webdevelopment, #idea)
                        </span>
                    </span>
                    <input
                        value={post.tag}
                        onChange={(e) =>
                            setPost({ ...post, tag: e.target.value })
                        }
                        className="form_input"
                        placeholder="#tag"
                        required
                    />
                </label>
                <div className="flex-end mx-3 mb-5 gap-4">
                    <Link href="/" className="text-gray-500 text-sm">
                        Cancel
                    </Link>

                    <button
                        type="submit"
                        disabled={submitting}
                        className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
                    >
                        {submitting
                            ? type === 'Create'
                                ? `${type.slice(0, -1)}ing...`
                                : `${type}ing...`
                            : type}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Form;
