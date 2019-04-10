from django.db import models


# Create your models here.

class Material(models.Model):
    title = models.CharField(max_length=100, db_index=True)
    code_material = models.CharField(max_length=50, unique=True, db_index=True)
    img = models.CharField(max_length=500)
    balance = models.FloatField()

    def __str__(self):
        return self.title
