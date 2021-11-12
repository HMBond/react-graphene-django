import graphene
from polls.schema import Query as poll_query


class Query(poll_query):
    pass


schema = graphene.Schema(query=Query)
