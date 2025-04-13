FROM python:3.9-slim

WORKDIR /app

# Copy and install requirements first for caching
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install gunicorn

# Copy the rest of the application
COPY . .

# Make sure the model directories exist
RUN mkdir -p app/models app/data

# Expose the port the app will run on
EXPOSE 8080

# Command to run the application using gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:8080", "run:app"]
