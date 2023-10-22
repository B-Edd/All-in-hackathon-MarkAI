from flask import Blueprint, request, render_template, session, flash, redirect, url_for, current_app, \
    send_from_directory
from myapp import create_app
import openai
import os


bp = Blueprint('bp', __name__, static_folder='',
               static_url_path='/static')

#openai.api_key = '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'
openai.api_key = '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'


@bp.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        content = request.form.get("textbox")

        # The "davinci" engine does not use the message-based format
        response = openai.Completion.create(
            engine="text-davinci-002",
            prompt=f"You are a teacher responsible for grading essays. Your task is to provide detailed feedback specified to the writing to help the student improve their work. Use examples from the students text for what to improve. Follow this format when giving feedback:\n\nMark: [mark out of 100%]\nFeedback: [feedback here]\n\nPlease assess the following essay and provide a mark and constructive feedback to help the student enhance their writing. Take into account factors such as clarity, organization, grammar, and content. Your feedback should be supportive and instructive. Give feedback for this: {content}\n",
            max_tokens=200  # Adjust as needed
        )

        text = response.choices[0].text
        return render_template("index.html", text=text)

    return render_template("index.html", text="")
