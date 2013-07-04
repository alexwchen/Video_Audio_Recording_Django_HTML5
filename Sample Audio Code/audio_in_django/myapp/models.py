from django.db import models
import datetime

class Document(models.Model):
    docfile = models.FileField(upload_to='documents/%Y/%m/%d')

class Conversation(models.Model):
    title = models.CharField(max_length=20000)
    creation_date = models.DateTimeField('create_date', default=datetime.datetime.now)
    #creation_date = models.DateField()
    def __unicode__(self):
        return self.title
