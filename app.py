from flask import Flask,  render_template, request
from flask_cors import CORS, cross_origin
import httplib2
import json
import jsonify
import requests

app = Flask(__name__)
CORS(app)

_accesTolken = "201055149.dc17a8d.79cf5051e5ba417789bb3a39ec0a35b8" 
_hashTage = 'testapp'
    
@app.route("/images")
def getTumbnails():
    
    response = getContent(_hashTage)
    data_total = json.loads(response.decode('utf-8'))

    images_thumbnail = [i for i in data_total['data'] if i['images']['thumbnail'] != None]    

    return json.dumps(images_thumbnail)


def getContent(hashtage = None, ):
    url = "https://api.instagram.com/v1/tags/"+hashtage+"/media/recent?access_token="+_accesTolken
    resp, content = httplib2.Http().request(url)
    return content

@app.route("/like/<mediaId>", methods=["POST", "DELETE"])
def likeMedia(mediaId):

    mediaId = mediaId
    url = "https://api.instagram.com/v1/media/"+mediaId+"/likes?access_token="+_accesTolken

    if request.method == 'DELETE':
        res = requests.delete(url) 
        return res.text
    
    res = requests.post(url) 
    return res.text
   

if __name__ == "__main__":
    app.run(debug=True)

