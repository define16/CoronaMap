from django import forms

class PostRegionForm(forms.ModelForm) :
    region = forms.CharField()