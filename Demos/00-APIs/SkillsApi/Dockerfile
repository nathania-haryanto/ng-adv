FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS base
LABEL author="Alexander Pajer"
WORKDIR /app

FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
WORKDIR /src

COPY ["*.csproj", "."]
RUN dotnet restore "SkillsApi.csproj"
COPY . .
RUN dotnet build "SkillsApi.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "SkillsApi.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "SkillsApi.dll"]

# Build Image
# docker build --rm -f "Dockerfile" -t skillsservice .

# Run Image
# docker run -it --rm -p 5051:80 skillsservice

# Browse using: 
# http://localhost:5051/api/skills

# Publish Image to dockerhub
# docker tag skillsservice arambazamba/skillsservice
# docker push arambazamba/skillsservice