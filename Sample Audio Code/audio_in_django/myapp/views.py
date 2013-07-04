from django.shortcuts import render_to_response
from django.template import RequestContext
from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse
from django.views.decorators.csrf import csrf_protect, csrf_exempt


from django.http import HttpResponse
from django.template import Context
from django.template import loader
from django.shortcuts import get_object_or_404
from django.http import Http404
from django.conf import settings
from django.db.models import Min


from myproject.myapp.models import Document
from myproject.myapp.forms import DocumentForm
from myproject.myapp.models import Conversation
import datetime

def list(request):
    # Handle file upload
    if request.method == 'POST':
        form = DocumentForm(request.POST, request.FILES)
        if form.is_valid():
            newdoc = Document(docfile = request.FILES['docfile'])
            newdoc.save()

            # Redirect to the document list after POST
            return HttpResponseRedirect(reverse('myapp.views.list'))
    else:
        form = DocumentForm() # A empty, unbound form

    # Load documents for the list page
    documents = Document.objects.all()

    # Render list page with the documents and the form
    return render_to_response(
        'myapp/list.html',
        {'documents': documents, 'form': form},
        context_instance=RequestContext(request)
    )


def wizard(request):

    # Render list page with the documents and the form
    return render_to_response(
        'myapp/wizard.html',
        context_instance=RequestContext(request)
    )


def main(request):

    # Render list page with the documents and the form
    return render_to_response(
        'myapp/main.html',
        context_instance=RequestContext(request)
    )

@csrf_protect
@csrf_exempt
def store_convo(request):
    status = "success"
    if request.method == 'POST':
        if request.POST:
            current_time = datetime.datetime.now()
            convo_title = request.POST['convo'].replace('_', ' ')
            print current_time
            print convo_title

            c = Conversation(title = convo_title)
            c.save()

    return HttpResponse(status)


def retrieve_convo(request):
    status = "success"
    if request.method == 'GET':
        load = Conversation.objects.all().order_by('-creation_date')[0]
        print load.title
    return HttpResponse(load.title)
