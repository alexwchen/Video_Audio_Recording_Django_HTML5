from django.contrib import admin
from myapp.models import Conversation

class convo_admin(admin.ModelAdmin):
    fieldsets = [
            ('Title', {'fields':['title', 'creation_date']}),
    ]

admin.site.register(Conversation, convo_admin)
