from django.shortcuts import render, HttpResponse

def index(request):
    return HttpResponse("A view index funcionou, Wow!")

def sobre(request):
    return HttpResponse("<h1>Sistema 1.0 desenvolvido por mim<h1>")

def index(request):
    return render(request,'index.html')

# Create your views here.
