import graphene
from graphene_django.types import DjangoObjectType
from .models import Question, Choice


class QuestionType(DjangoObjectType):
    class Meta:
        model = Question


class ChoiceType(DjangoObjectType):
    class Meta:
        model = Choice


class Query(graphene.ObjectType):
    all_questions = graphene.List(QuestionType)
    choices_by_question_id = graphene.List(
        ChoiceType, id=graphene.Int(required=True))

    def resolve_all_questions(self, info, **kwargs):
        return Question.objects.all()

    def resolve_choices_by_question_id(self, info, id):
        question = Question.objects.get(id=id)
        return question.choice_set.all()
