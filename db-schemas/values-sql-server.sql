INSERT INTO [dbo].[product] ([name], [description], [price], [availability], [createdAt], [updatedAt], [deletedAt])
VALUES
('Producto A', 'Descripción A', 19.99, 1, GETDATE(), GETDATE(), NULL),
('Producto B', 'Descripción B', 29.99, 1, GETDATE(), GETDATE(), NULL),
('Producto C', 'Descripción C', 9.99, 0, GETDATE(), GETDATE(), NULL),
('Producto D', 'Descripción D', 15.99, 1, GETDATE(), GETDATE(), NULL),
('Producto E', 'Descripción E', 25.50, 1, GETDATE(), GETDATE(), NULL),
('Producto F', 'Descripción F', 5.00, 0, GETDATE(), GETDATE(), NULL),
('Producto G', 'Descripción G', 12.75, 1, GETDATE(), GETDATE(), NULL),
('Producto H', 'Descripción H', 45.00, 1, GETDATE(), GETDATE(), NULL),
('Producto I', 'Descripción I', 33.33, 1, GETDATE(), GETDATE(), NULL),
('Producto J', 'Descripción J', 18.45, 0, GETDATE(), GETDATE(), NULL);
GO