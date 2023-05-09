COMPOSE = docker-compose -f docker/compose.yml
ARGS = $(shell echo $(MAKECMDGOALS) | sed 's!^.*$@!!')

up:; @$(COMPOSE) up -d
down:; @$(COMPOSE) down

sh:; @$(COMPOSE) exec $(ARGS) sh
logs:; @$(COMPOSE) logs -f $(ARGS)