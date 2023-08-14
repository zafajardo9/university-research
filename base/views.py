from django.shortcuts import render

from django.http import HttpResponse



rooms = [
    {'id': 1, 'name': 'Lets go!'},
    {'id': 2, 'name': 'Lol'},
    {'id': 3, 'name': 'Ulol'},
]
def home(request):
    return render(request, 'home.html', {'rooms' : rooms})

def room(request):
    return HttpResponse('Room')