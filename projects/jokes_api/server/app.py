#!/usr/bin/env python3
import random
import pyjokes
from flask import Flask, request, render_template, url_for, make_response, jsonify,redirect
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

 
 #try on python http.server at localhost:8000 to test it

@app.route("/")
def index():
    
    return redirect(url_for('jokes'))
    pass

@app.route("/api/v1/jokes", methods=["GET", "POST"])
def jokes():

    randomjoke = pyjokes.get_joke()
    dict = {'joke':randomjoke}

    return jsonify(dict)
    pass

@app.route("/api/v1/jokes/<int:n>")
def idjoke(n: int):
    
    jokelist = pyjokes.get_jokes()
    chosen_joke = jokelist[n]
    dict = {'joke': chosen_joke}
     
    return jsonify(dict)
    

if __name__ == "__main__":
    app.run(debug = True)


# Tell me joke --- remind me joke # ___
# Buttons
# Joke displays Below
