from django import forms


class QualityForm(forms.Form):
    quantity = forms.IntegerField(label="Количество", min_value=1, max_value=100)

    def save(self):
        pass
