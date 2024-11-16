FROM postgres:17
ENV POSTGRES_DB parcialdatabase
ENV POSTGRES_USER admin
ENV POSTGRES_PASSWORD admin123
ENV DB_USER ana
ENV DB_PASSWORD abc123
WORKDIR /docker-entrypoint-initdb.d
COPY src/* .