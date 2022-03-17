from django.conf import settings


class Page:
    def __init__(self, request):
        self.session = request.session
        cur_page = self.session.get(settings.CUR_PAGE_ID)
        if not cur_page:
            cur_page = self.session[settings.CUR_PAGE_ID] = 1
        self.cur_page = cur_page

    def change_page(self):
        self.cur_page += 1
        self.save()

    def save(self):
        self.session[settings.CUR_PAGE_ID] = self.cur_page
        self.session.modified = True

    def refresh(self):
        del self.session[settings.CUR_PAGE_ID]
        self.session.modified = True

