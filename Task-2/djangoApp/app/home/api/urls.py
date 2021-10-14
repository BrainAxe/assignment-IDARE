from django.urls import path
from .views import DownloadCSV, DownloadPDF, UploadCSV


urlpatterns = [

    path('v1/upload-csv/', UploadCSV.as_view(), name='api_upload_csv'),

    path('v1/download-csv/',DownloadCSV.as_view(), name='api_download_csv'),
    path('v1/download-pdf/',DownloadPDF.as_view(), name='api_download_pdf'),

]