#!/usr/bin/env python3

from flask import Flask, request, render_template, url_for, make_response
import math
import itertools
import operator

app = Flask(__name__)

 
file = open('/usr/share/dict/american-english', 'r')
file = open('/usr/share/dict/british-english','r')

american = set(line.strip() for line in open('/usr/share/dict/american-english', 'r'))
british = set(line.strip() for line in open('/usr/share/dict/british-english', 'r'))

points = {'*':0, 'e':1, 'a':1, 'i':1, 'o':1, 'n':1, 'r':1, 't':1, 'l':1,
         's':1, 'u':1, 'd':2, 'g':2, 'b':3, 'c':3, 'm':3, 'p':3, 'f':4,
         'h':4, 'v':4, 'w':4, 'y':4, 'k':5, 'j':8, 'x':8, 'q':10, 'z':10}

def wordInformation(words):
    wordsInfo = []
    for word in words:
        if len(word) > 1:
            wordInfo = []
            wordInfo.append(word)
            wordInfo.append(len(word))
            score = 0
            for ch in word:
                score += points[ch]
            wordInfo.append(score)
            wordsInfo.append(wordInfo)
    
    return wordsInfo

def getWords(perm, dictname):
    if dictname == "american-english":
        dictionary = american
    else:
        dictionary = british
    actualWords = []
    for item in perm:
        if item in dictionary:
            actualWords.append(item)
    return actualWords

def wordPosibilites(let1, let2, let3, let4, let5, let6, let7, exist = ""):
    params = [let1, let2, let3, let4, let5, let6, let7]
    items =[]
    haveWild = False
    for param in params:
        isWildcard = False
        if param == '*':
            isWildcard = True
            haveWild = True
        if (param != "" or param != '?') and not isWildcard:
            items.append(param)
    letterCombos = set()

    for i in range(len(items)):
        letterCombos.update(list(map("".join, itertools.permutations(items, i+1))))

    
    if haveWild:
        print(len(letterCombos))
        listLetterCombos = list(letterCombos)
        for combo in range(len(letterCombos)):
            for ch in "abcdefghijklmnopqrstuvwxyz":
                letterCombos.update(list(map("".join, itertools.permutations([listLetterCombos[combo], ch], 2))))
    

    if exist == "":
        return letterCombos
    
    else:
        listLetterCombos = list(letterCombos)
        existLetterCombo = set()
        for combo in range(len(letterCombos)):
            existLetterCombo.update(list(map("".join, itertools.permutations([listLetterCombos[combo], exist], 2))))
            
        return existLetterCombo

@app.route("/")
def index():
    
    return render_template('index.html')
    pass

@app.route("/result", methods=["GET", "POST"])
def scrabble():
    let1 = str(request.form.get('letter1'))
    let2 = str(request.form.get('letter2'))
    let3 = str(request.form.get('letter3'))
    let4 = str(request.form.get('letter4'))
    let5 = str(request.form.get('letter5'))
    let6 = str(request.form.get('letter6'))
    let7 = str(request.form.get('letter7'))

    dictname = str(request.form.get('dict'))

    existingletters = str(request.form.get('existingletters'))
    check = request.form.get('attachExistingCheck')

    if check != None:
        pos = wordPosibilites(let1,let2,let3,let4,let5,let6,let6, exist = existingletters)
        word_pos = getWords(pos,dictname)
        wordinfo = wordInformation(word_pos)
        wordsorted = sorted(wordinfo, key=operator.itemgetter(2), reverse=True)
        
        if len(word_pos) == 1 and existingletters in word_pos:
            return render_template('results.html', error = 'No Words')
        else:
            return render_template('results.html', resultsList = wordsorted)
    else:
        pos = wordPosibilites(let1,let2,let3,let4,let5,let6,let6, exist = "")
        word_pos = getWords(pos,dictname)
        wordinfo = wordInformation(word_pos)
        wordsorted = sorted(wordinfo, key=operator.itemgetter(2), reverse=True)

        if wordsorted == []:
            return render_template('results.html', error = 'No Words')
        else:
            return render_template('results.html', resultsList = wordsorted)
    
if __name__ == "__main__":
    app.run(debug = True)

