import Link from "next/link"

const Form = ({ type, Post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing products with the world, and let your imagination run wild with any AI-powered platform.
      </p>
      <form onSubmit={handleSubmit}
      className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
        <label>
          <span className="font-satoshi font-semibold text-base text-grey-700">
            Your AI Prompt
          </span>
          <textarea
            value={postMessage.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value})}
            placeholder="write your prompt here.."
            required
            className="from_textarea"
            >

          </textarea>
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-grey-700">
            Your AI Prompt
          </span>
          <textarea
            value={postMessage.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value})}
            placeholder="write your prompt here.."
            required
            className="from_textarea"
            >

          </textarea>
        </label>
      </form>

    </section>
  )
}

export default Form