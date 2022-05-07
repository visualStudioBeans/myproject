from flask import render_template, request
from app import app


@app.route("/", methods=["GET"])
@app.route("/index", methods=["GET"])
def index():
    return render_template("index.html")


@app.route("/codeToFlask", methods=["GET", "POST"])
def codeToFlask():
    code = eval(request.data.decode("utf-8"))["code"]
    exec(code)
    return '', 204
