from flask import Flask,render_template,request
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer,ListTrainer
app=Flask(__name__)
english_bot=ChatBot("Chatterbot",storage_adapter="chatterbot.storage.SQLStorageAdapter")
trainer=ChatterBotCorpusTrainer(english_bot)
trainer.train("chatterbot.corpus.english.greetings","chatterbot.corpus.english.conversations")
trainer.train("data/data.yml")
@app.route('/')
def index():
    return render_template("home.html")

@app.route('/get')
def get_response():
    user=request.args.get("msg")
    return str(english_bot.get_response(user))


if __name__=="__main__":
    app.run(debug=True)