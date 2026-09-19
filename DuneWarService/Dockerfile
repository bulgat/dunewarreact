# --- ЭТАП 1: Сборка приложения ---
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS installer
WORKDIR /src

# Копируем файл проекта и восстанавливаем зависимости
COPY DuneWarLastFantasy.csproj ./
RUN dotnet restore DuneWarLastFantasy.csproj

# Копируем все остальные файлы и публикуем проект
COPY . .
RUN dotnet publish DuneWarLastFantasy.csproj -c Release -o /app/out /p:UseAppHost=false

# --- ЭТАП 2: Финальный образ для запуска ---
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runner
WORKDIR /app

# Порт по умолчанию для ASP.NET Core 9 (HTTP)
EXPOSE 8080

# В контейнере слушаем только HTTP на порту 8080 (HTTPS в образе не настраиваем)
ENV ASPNETCORE_URLS=http://+:8080 \
    ASPNETCORE_ENVIRONMENT=Production

# Копируем готовые бинарники из папки /app/out предыдущего этапа
COPY --from=installer /app/out .

# Команда запуска
ENTRYPOINT ["dotnet", "DuneWarLastFantasy.dll"]