from django.conf.urls.defaults import patterns, url

urlpatterns = patterns('myapp.views',
    url(r'^list/$', 'list', name='list'),
    url(r'^main/$', 'main', name='main'),
    url(r'^wizard/$', 'wizard', name='wizard'),
    url(r'^store_convo/$', 'store_convo', name='store_convo'),
    url(r'^retrieve_convo/$', 'retrieve_convo', name='retrieve_convo'),
)
