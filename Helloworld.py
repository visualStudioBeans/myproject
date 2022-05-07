from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template('Template1.html')

# venv\Scripts\activate
# $env:FLASK_APP = "Helloworld"
# $env:FLASK_ENV = "development"
# flask run