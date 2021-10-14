import ast
import csv
import io
import uuid
import random


from django.http import FileResponse, HttpResponse
from plotly.subplots import make_subplots
from reportlab.lib.pagesizes import A4
from reportlab.lib.utils import ImageReader
from reportlab.pdfgen import canvas
from rest_framework.response import Response
from rest_framework.views import APIView

from ..models import UploadedDoc


class DownloadCSV(APIView):

    def get(self, request):
        document_id = request.query_params.get('document_id')
        doc = UploadedDoc.objects.get(id=document_id)
        filename = 'media/documents/' + doc.name
        response = FileResponse(open(filename, 'rb'))
        return response

class DownloadPDF(APIView):

    def get(self, request):
        x_data = request.query_params.get('x_data')
        y_data = request.query_params.get('y_data')

        x_data = ast.literal_eval(x_data)
        y_data = ast.literal_eval(y_data)
    
        response = HttpResponse(content_type='application/pdf')  
        response['Content-Disposition'] = 'attachment; filename="figures.pdf"'  
        p = canvas.Canvas(response, pagesize=A4)

        fig = make_subplots(rows=3, cols=1)

        fig.add_scatter(x=x_data, y=y_data,
                        mode='markers', row=1, col=1)

        fig.add_box(y=y_data, row=3, col=1)
        fig.add_box(y=x_data, row=3, col=1)
        fig.add_histogram(x=x_data, row=2, col=1)
        
        fig.update_layout(height=800, width=600, showlegend=False)
        img_bytes = fig.to_image(format="png")

        image = ImageReader(io.BytesIO(img_bytes))
        p.drawImage(image, 10, 10, mask='auto')
        p.save()
        return response  


class UploadCSV(APIView):

    def post(self, request):
        f = request.FILES['file']
        
        if not f.name.endswith('.csv'):
          pass

        
        ext = str(f).split('.')[-1]
        f_name = "%s.%s" % (uuid.uuid4(), ext)
        f_loc = 'media/documents/' + f_name
        with open(f_loc, 'wb+') as destination:
            for chunk in f.chunks():
                destination.write(chunk)
    
        new_doc = UploadedDoc.objects.create(name=f_name)

        file_data = []
        with open(f_loc, 'r') as rf:
            csvreader = csv.reader(rf)
            csv_headers = next(csvreader)
            for row in csvreader:
                file_data.append(row)

        context = {}
        context["header"] = csv_headers;
        context["data"] = file_data;
        context["link"] = 'api/v1/download-csv/?document_id=' + str(new_doc.id)


        x_data = []
        y_data = []
        for index,li in enumerate(file_data[:14]):
          v = random.choice(li)
          try:
            v = float(v)
          except:
            v = 0
          if index % 2 == 0:
            x_data.append(v)
          else:
            y_data.append(v)

        context['x_data'] = x_data
        context['y_data'] = y_data

        
        return Response(context)
