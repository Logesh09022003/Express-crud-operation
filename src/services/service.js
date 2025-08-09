const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getUsers = async () => {
  return await prisma.user.findMany();
};

exports.getUserById = async (id) => {
  return await prisma.user.findUnique({ where: { id: Number(id) } });
};

exports.createUser = async (data) => {
  return await prisma.user.create({ data });
};

exports.updateUser = async (id, data) => {
  return await prisma.user.update({ where: { id: Number(id) }, data });
};

exports.deleteUser = async (id) => {
  return await prisma.user.delete({ where: { id: Number(id) } });
};