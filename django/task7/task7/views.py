from django.http import HttpResponse

def set_header(request):
    header_name = request.GET.get('headerName')
    header_value = request.GET.get('headerValue')
    response =  HttpResponse(header_name, content_type="text/plain")
    response[header_name] = header_value
    return response

def get_header(request, header_name):
    header_value = request.headers.get(header_name, 'Header not set')
    return HttpResponse(f'Header {header_name} has value: {header_value}')

def set_cookie(request):
    cookie_name = request.GET.get('cookieName')
    cookie_value = request.GET.get('cookieValue')
    response = HttpResponse('Cookie set successfully')
    response.set_cookie(cookie_name, cookie_value, httponly=True)
    return response

def get_cookie(request, cookie_name):
    cookie_value = request.COOKIES.get(cookie_name, 'Cookie not set')
    return HttpResponse(f'Cookie {cookie_name} has value: {cookie_value}')
