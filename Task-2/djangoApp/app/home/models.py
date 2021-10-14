from django.db import models


class UploadedDoc(models.Model):
    name = models.CharField(max_length=80)
    created = models.DateTimeField(auto_now_add=True)
	
    def __str__(self):
		    return str(self.id)