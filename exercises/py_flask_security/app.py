from flask import Flask, request, render_template, url_for, redirect, make_response, session, escape 
import os


app = Flask(__name__)
app.secret_key =  b'PB>n\x8b\x9a\r\x04v\x90I\xe3\xc7\xcf\xc1\x15\x92<\x9e\xf7~LV\x14'

@app.route('/')
def index():
    if 'username' in session:
        return render_template('index.html', username=session['username'])
    return redirect(url_for('login'))
    

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        session['username'] = request.form['username']
        return redirect(url_for('index'))
    return render_template('login.html')

@app.route('/logout', methods=['POST'])
def logout():
    session.pop('username', None)
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)