-- Crear esquema si no existe
IF NOT EXISTS (SELECT * FROM sys.schemas WHERE name = 'dbo')
BEGIN
    EXEC('CREATE SCHEMA dbo')
END
GO

-- Tabla Product
CREATE TABLE [dbo].[product]
(
    [id] INT IDENTITY(1,1) PRIMARY KEY,
    [name] VARCHAR(255) NOT NULL,
    [description] VARCHAR(255),
    [price] DECIMAL(10, 2) NOT NULL,
    [availability] BIT NOT NULL,
    [createdAt] DATETIME DEFAULT GETDATE() NOT NULL,
    [updatedAt] DATETIME DEFAULT GETDATE() NOT NULL,
    [deletedAt] DATETIME
);
GO

-- Tabla Order
CREATE TABLE [dbo].[order]
(
    [id] INT IDENTITY(1,1) PRIMARY KEY,
    [date_sale] DATETIME DEFAULT GETDATE() NOT NULL,
    [is_delivered] BIT DEFAULT 0 NOT NULL,
    [price_delivery] DECIMAL(10, 2),
    [price_total] DECIMAL(10, 2),
    [deletedAt] DATETIME
);
GO

-- Tabla OrderProduct
CREATE TABLE [dbo].[order_product]
(
    [id] INT IDENTITY(1,1) PRIMARY KEY,
    [quantity] INT NOT NULL,
    [comment] VARCHAR(255),
    [orderId] INT,
    [productId] INT,
    [deletedAt] DATETIME,
    CONSTRAINT FK_OrderProduct_Order FOREIGN KEY ([orderId]) REFERENCES [dbo].[order]([id]),
    CONSTRAINT FK_OrderProduct_Product FOREIGN KEY ([productId]) REFERENCES [dbo].[product]([id])
);
GO

-- Tabla User
CREATE TABLE [dbo].[user]
(
    [id] INT IDENTITY(1,1) PRIMARY KEY,
    [name] VARCHAR(500) NOT NULL,
    [lastName] VARCHAR(500) NOT NULL,
    [email] VARCHAR(255) NOT NULL UNIQUE,
    [password] VARCHAR(500) NOT NULL,
    [age] INT,
    [address] VARCHAR(255),
    [createdAt] DATETIME DEFAULT GETDATE() NOT NULL,
    [updatedAt] DATETIME DEFAULT GETDATE() NOT NULL,
    [deletedAt] DATETIME,
    [rol] VARCHAR(50) DEFAULT 'user' NOT NULL
);
GO

-- Tabla Migrations
CREATE TABLE [dbo].[migrations]
(
    [id] INT IDENTITY(1,1) PRIMARY KEY,
    [timestamp] BIGINT NOT NULL,
    [name] VARCHAR(255) NOT NULL
);
GO