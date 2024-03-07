import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const basePromptPrefix = ``

const generateAction = async (req, res) => {
  console.log(`API: ${basePromptPrefix}${req.body.userInput}`)

  const chatCompletion = await openai.chat.completions.create({
    messages: [
      { role: 'user', content: `${basePromptPrefix}${req.body.userInput}` },
    ],
    model: 'gpt-3.5-turbo',
  })

  const basePromptOutput = chatCompletion.data.choices.pop()

  // Send over the Prompt output to our UI.
  res.status(200).json({ output: basePromptOutput })
}

export default generateAction
