COMPOSE = docker-compose

up:; @$(COMPOSE) up -d
down:; @$(COMPOSE) down
down-v:; @$(COMPOSE) down -v

sh:; @$(COMPOSE) exec gitea sh
logs:; @$(COMPOSE) logs -f