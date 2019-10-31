#!/usr/bin/env python3
import random
import pyjokes
from flask import Flask, request, render_template, url_for, make_response

app = Flask(__name__)

 

@app.route("/")
def index():
    
    language = ['en', 'de', 'es', 'gl' , 'eus']
    joketype = 	['neutral', 'chuck', 'all']

    return render_template('jokes.html', language = language, joketype = joketype)
    pass

@app.route("/joke", methods=["GET", "POST"])
def joke():
    try:
        languagetype = str(request.form.get('language'))
        joketype = str(request.form.get('joketype'))       
        jokes = []
        getjoke = pyjokes.get_joke(languagetype,joketype)
        jokes.append(getjoke)
        return render_template('jokes.html', jokes = jokes)
        pass
    except:
        error = "This can not be translated!"
        return render_template('jokes.html', error = error)

if __name__ == "__main__":
    app.run(debug = True)

