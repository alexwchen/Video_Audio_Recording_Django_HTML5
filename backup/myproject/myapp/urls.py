from django.conf.urls.defaults import patterns, url

urlpatterns = patterns('myapp.views',
    url(r'^list/$', 'list', name='list'),
    url(r'^audio/$', 'audio', name='audio'),
    url(r'^video/$', 'video', name='video'),
)
